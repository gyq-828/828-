import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ProjectProgress {
  projectId: number;
  bestScore: number;
  completed: boolean;
  lastAttempt: string;
}

export interface CourseProgress {
  courseId: string;
  projects: Record<number, ProjectProgress>;
  totalProjects: number;
  completedProjects: number;
  averageScore: number;
}

const STORAGE_KEY = 'data-analysis-progress';

export function getProgress(): CourseProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return {
    courseId: 'data-analysis',
    projects: {},
    totalProjects: 12,
    completedProjects: 0,
    averageScore: 0,
  };
}

export function saveProjectScore(projectId: number, score: number): CourseProgress {
  const progress = getProgress();
  const existing = progress.projects[projectId];
  
  const newBestScore = existing ? Math.max(existing.bestScore, score) : score;
  const wasCompleted = existing?.completed || false;
  const isNowCompleted = newBestScore >= 80;
  
  progress.projects[projectId] = {
    projectId,
    bestScore: newBestScore,
    completed: isNowCompleted,
    lastAttempt: new Date().toISOString(),
  };
  
  const allProjects = Object.values(progress.projects);
  progress.completedProjects = allProjects.filter(p => p.completed).length;
  progress.averageScore = allProjects.length > 0
    ? Math.round(allProjects.reduce((sum, p) => sum + p.bestScore, 0) / allProjects.length)
    : 0;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
  
  return progress;
}

export function getProjectProgress(projectId: number): ProjectProgress | null {
  const progress = getProgress();
  return progress.projects[projectId] || null;
}

export function resetProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset progress:', e);
  }
}
