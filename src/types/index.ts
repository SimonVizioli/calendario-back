export interface Event {
    UniqueID: number;
    name: string;
    code: string;
    description: string;
}

export interface User {
    UniqueID: number;
}

export interface Schedule {
    UniqueID: number;
    startDate: Date;
    endDate: Date;
    description: string;
    deleted: boolean;
    eventSchedule_id: number;
    userSchedule_id: number;
    scheduleType_id: number;
}

export interface ScheduleType {
    UniqueID: number;
    name: string;
    code: string;
    description: string;
}

export interface EventSchedule {
    UniqueID: number;
    schedule_id: number;
    event_id: number;
    user_id: number;
}

export interface UserSchedule {
    UniqueID: number;
    schedule_id: number;
    user_id: number;
}

export interface CountResponse {
    count: number;
}