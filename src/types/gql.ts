/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): R | Result | Promise<R | Result>;
};

/** The UUID scalar type represents a version 4 (random) UUID. Any binary not conforming to this format will be flagged. */
export type Uuid = any;

/** The `Naive DateTime` scalar type represents a naive date and time withouttimezone. The DateTime appears in a JSON response as an ISO8601 formattedstring. */
export type NaiveDateTime = any;

export interface RootQueryType {
  match: Match | null /** Get a match by its ID */;
  user: User | null /** Retrieve a user from a JWT */;
}

export interface Match {
  id: string;
  opponent: string;
  playedAt: NaiveDateTime;
  team: Team;
  votes: Vote[];
}

export interface Team {
  id: string;
  matches: Match[];
  name: string;
  players: Player[];
  user: User;
}

export interface Player {
  id: string;
  name: string;
  team: Team;
}

export interface User {
  email: string;
  id: string;
  name: string;
  teams: Team[];
}

export interface Vote {
  comment: string | null;
  id: string;
  match: Match;
  player: Player;
  type: string;
}

export interface RootMutationType {
  createMatch: CreateMatchResponse | null /** Create a new match */;
  createPlayer: CreatePlayerResponse | null /** Create a new player */;
  createTeam: CreateTeamResponse | null /** Create a new team */;
  login: Session | null /** Obtain a JWT */;
  register: RegisterResponse | null /** Register a new user and login */;
  vote: VoteResponse | null /** Submit a vote */;
}

export interface CreateMatchResponse {
  entity: Match | null;
  validation: Validation[] | null;
}
/** A validation error */
export interface Validation {
  key: string;
  reason: string;
}

export interface CreatePlayerResponse {
  entity: Player | null;
  validation: Validation[] | null;
}

export interface CreateTeamResponse {
  entity: Team | null;
  validation: Validation[] | null;
}
/** A session for a logged in user */
export interface Session {
  jwt: string;
  user: User;
}

export interface RegisterResponse {
  entity: Session | null;
  validation: Validation[] | null;
}

export interface VoteResponse {
  validation: Validation[] | null;
}
export interface MatchRootQueryTypeArgs {
  id: Uuid;
}
export interface CreateMatchRootMutationTypeArgs {
  opponent: string;
  playedAt: NaiveDateTime;
  teamId: string;
}
export interface CreatePlayerRootMutationTypeArgs {
  name: string;
  teamId: string;
}
export interface CreateTeamRootMutationTypeArgs {
  name: string;
}
export interface LoginRootMutationTypeArgs {
  email: string;
  password: string;
}
export interface RegisterRootMutationTypeArgs {
  email: string;
  name: string;
  password: string;
}
export interface VoteRootMutationTypeArgs {
  comment: string | null;
  matchId: Uuid /** The ID of the match for which the vote is for */;
  playerId: string /** The ID of the player being nominated */;
  type: string /** "dotd" or "motm" */;
}

export namespace RootQueryTypeResolvers {
  export interface Resolvers<Context = any> {
    match?: MatchResolver<
      Match | null,
      any,
      Context
    > /** Get a match by its ID */;
    user?: UserResolver<
      User | null,
      any,
      Context
    > /** Retrieve a user from a JWT */;
  }

  export type MatchResolver<
    R = Match | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MatchArgs>;
  export interface MatchArgs {
    id: Uuid;
  }

  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MatchResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    opponent?: OpponentResolver<string, any, Context>;
    playedAt?: PlayedAtResolver<NaiveDateTime, any, Context>;
    team?: TeamResolver<Team, any, Context>;
    votes?: VotesResolver<Vote[], any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type OpponentResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PlayedAtResolver<
    R = NaiveDateTime,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TeamResolver<R = Team, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type VotesResolver<R = Vote[], Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace TeamResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    matches?: MatchesResolver<Match[], any, Context>;
    name?: NameResolver<string, any, Context>;
    players?: PlayersResolver<Player[], any, Context>;
    user?: UserResolver<User, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MatchesResolver<
    R = Match[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PlayersResolver<
    R = Player[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace PlayerResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context>;
    team?: TeamResolver<Team, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TeamResolver<R = Team, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    email?: EmailResolver<string, any, Context>;
    id?: IdResolver<string, any, Context>;
    name?: NameResolver<string, any, Context>;
    teams?: TeamsResolver<Team[], any, Context>;
  }

  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TeamsResolver<R = Team[], Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace VoteResolvers {
  export interface Resolvers<Context = any> {
    comment?: CommentResolver<string | null, any, Context>;
    id?: IdResolver<string, any, Context>;
    match?: MatchResolver<Match, any, Context>;
    player?: PlayerResolver<Player, any, Context>;
    type?: TypeResolver<string, any, Context>;
  }

  export type CommentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type MatchResolver<R = Match, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PlayerResolver<
    R = Player,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace RootMutationTypeResolvers {
  export interface Resolvers<Context = any> {
    createMatch?: CreateMatchResolver<
      CreateMatchResponse | null,
      any,
      Context
    > /** Create a new match */;
    createPlayer?: CreatePlayerResolver<
      CreatePlayerResponse | null,
      any,
      Context
    > /** Create a new player */;
    createTeam?: CreateTeamResolver<
      CreateTeamResponse | null,
      any,
      Context
    > /** Create a new team */;
    login?: LoginResolver<Session | null, any, Context> /** Obtain a JWT */;
    register?: RegisterResolver<
      RegisterResponse | null,
      any,
      Context
    > /** Register a new user and login */;
    vote?: VoteResolver<VoteResponse | null, any, Context> /** Submit a vote */;
  }

  export type CreateMatchResolver<
    R = CreateMatchResponse | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateMatchArgs>;
  export interface CreateMatchArgs {
    opponent: string;
    playedAt: NaiveDateTime;
    teamId: string;
  }

  export type CreatePlayerResolver<
    R = CreatePlayerResponse | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreatePlayerArgs>;
  export interface CreatePlayerArgs {
    name: string;
    teamId: string;
  }

  export type CreateTeamResolver<
    R = CreateTeamResponse | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreateTeamArgs>;
  export interface CreateTeamArgs {
    name: string;
  }

  export type LoginResolver<
    R = Session | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    email: string;
    password: string;
  }

  export type RegisterResolver<
    R = RegisterResponse | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RegisterArgs>;
  export interface RegisterArgs {
    email: string;
    name: string;
    password: string;
  }

  export type VoteResolver<
    R = VoteResponse | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, VoteArgs>;
  export interface VoteArgs {
    comment: string | null;
    matchId: Uuid /** The ID of the match for which the vote is for */;
    playerId: string /** The ID of the player being nominated */;
    type: string /** "dotd" or "motm" */;
  }
}

export namespace CreateMatchResponseResolvers {
  export interface Resolvers<Context = any> {
    entity?: EntityResolver<Match | null, any, Context>;
    validation?: ValidationResolver<Validation[] | null, any, Context>;
  }

  export type EntityResolver<
    R = Match | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ValidationResolver<
    R = Validation[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A validation error */
export namespace ValidationResolvers {
  export interface Resolvers<Context = any> {
    key?: KeyResolver<string, any, Context>;
    reason?: ReasonResolver<string, any, Context>;
  }

  export type KeyResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ReasonResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace CreatePlayerResponseResolvers {
  export interface Resolvers<Context = any> {
    entity?: EntityResolver<Player | null, any, Context>;
    validation?: ValidationResolver<Validation[] | null, any, Context>;
  }

  export type EntityResolver<
    R = Player | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ValidationResolver<
    R = Validation[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace CreateTeamResponseResolvers {
  export interface Resolvers<Context = any> {
    entity?: EntityResolver<Team | null, any, Context>;
    validation?: ValidationResolver<Validation[] | null, any, Context>;
  }

  export type EntityResolver<
    R = Team | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ValidationResolver<
    R = Validation[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A session for a logged in user */
export namespace SessionResolvers {
  export interface Resolvers<Context = any> {
    jwt?: JwtResolver<string, any, Context>;
    user?: UserResolver<User, any, Context>;
  }

  export type JwtResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace RegisterResponseResolvers {
  export interface Resolvers<Context = any> {
    entity?: EntityResolver<Session | null, any, Context>;
    validation?: ValidationResolver<Validation[] | null, any, Context>;
  }

  export type EntityResolver<
    R = Session | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ValidationResolver<
    R = Validation[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace VoteResponseResolvers {
  export interface Resolvers<Context = any> {
    validation?: ValidationResolver<Validation[] | null, any, Context>;
  }

  export type ValidationResolver<
    R = Validation[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
