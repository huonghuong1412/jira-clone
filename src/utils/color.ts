import { IssuePriority, IssueStatus, IssueType } from "./issues";

export const color = {
    primary: '#0052cc', // Blue
    success: '#0B875B', // green
    danger: '#E13C3C', // red
    warning: '#F89C1C', // orange
    secondary: '#F4F5F7', // light grey

    textDarkest: '#172b4d',
    textDark: '#42526E',
    textMedium: '#5E6C84',
    textLight: '#8993a4',
    textLink: '#0052cc',

    backgroundDarkPrimary: '#0747A6',
    backgroundMedium: '#dfe1e6',
    backgroundLight: '#ebecf0',
    backgroundLightest: '#F4F5F7',
    backgroundLightPrimary: '#D2E5FE',
    backgroundLightSuccess: '#E4FCEF',

    borderLightest: '#dfe1e6',
    borderLight: '#C1C7D0',
    borderInputFocus: '#4c9aff',
};

export const issueTypeColors = {
    [IssueType.TASK]: '#4FADE6', // blue
    [IssueType.BUG]: '#E44D42', // red
    [IssueType.STORY]: '#65BA43', // green
};

export const issuePriorityColors = {
    [IssuePriority.HIGHEST]: '#CD1317', // red
    [IssuePriority.HIGH]: '#E9494A', // orange
    [IssuePriority.MEDIUM]: '#E97F33', // orange
    [IssuePriority.LOW]: '#2D8738', // green
    [IssuePriority.LOWEST]: '#57A55A', // green
};

export const issueStatusColors = {
    [IssueStatus.BACKLOG]: color.textDark,
    [IssueStatus.INPROGRESS]: '#fff',
    [IssueStatus.SELECTED]: color.textDark,
    [IssueStatus.DONE]: '#fff',
};

export const issueStatusBackgroundColors = {
    [IssueStatus.BACKLOG]: color.backgroundMedium,
    [IssueStatus.INPROGRESS]: color.primary,
    [IssueStatus.SELECTED]: color.backgroundMedium,
    [IssueStatus.DONE]: color.success,
};