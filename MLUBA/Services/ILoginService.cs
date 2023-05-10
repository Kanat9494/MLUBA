namespace MLUBA.Services;

public interface ILoginService
{
    Task<AuthenticateResponse> AuthenticateUser(string userName, string password);
}
