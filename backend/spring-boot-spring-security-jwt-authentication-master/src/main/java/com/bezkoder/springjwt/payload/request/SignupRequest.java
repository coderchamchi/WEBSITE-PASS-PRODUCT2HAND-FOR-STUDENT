package com.bezkoder.springjwt.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;



@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class SignupRequest {
  @NotBlank
  private String email;

  @NotBlank
  private String username;

  @NotBlank
  private String birthday;

  @NotBlank
  private String password;

  private String created;

  private String updated;

  private ArrayList<String> role;

}
