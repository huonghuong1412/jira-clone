type AvatarProps = {
    className?: string;
    avatarUrl: string;
    name: string;
    size: number;
}

const Avatar = ({ className, avatarUrl, name, size }: AvatarProps) => {
    return (
        <div
            style={{ backgroundImage: `url(${avatarUrl})`, width: size, height: size }}
            className={`${className ? className : ''} inline-block rounded-full bg-center bg-no-repeat bg-cover`} />
    )
}

export default Avatar;
