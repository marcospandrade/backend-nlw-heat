import prismaClient from "../prisma";
class ProfileUserService {
  async execute(user_id: string) {
    const result = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return result;
  }
}

export { ProfileUserService };
