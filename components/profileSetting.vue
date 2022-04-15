<template>
  <div class="wrapper">
    <div class="d-flex flex-column align-items-start row py-3 border-bottom px-2">
      <div class="row">
        <div class="d-flex flex-row col-md-6">
        <div class="profile-imgo">
          <img
            v-if="picture"
            :src="`https://odaaay.com/api/static/files/${picture}`"
            alt=""
            class="w-100 h-100 rounded-circle"
          />
          <img
            src="~/assets/images/profile.png"
            alt=""
            class="w-100 h-100 rounded-circle"
            v-else
          />
        </div>
        <input class="form-control d-none" type="file" id="formFile" ref="profilePic" v-on:change="addProfilePic">
        <div class="pl-sm-4 pl-2 pt-2" id="img-section">
          <h6 class="font-weight-bolder">Profile Photo</h6>
          <p class="text-14">Accepted file type .png/jpg/jpeg Less than 1MB</p>
          <button class="btn btn-light mr-3 p-1 btn-sm" v-on:click="onAddThing">Upload</button>
        </div>
        <b-modal ref="my-modal" id="modal-center" hide-footer centered title="Change profile Picture">
          <div class="d-flex flex-column align-content-center justify-content-between">
            <cropper
              stencil-component="circle-stencil"
              class="cropper"
              ref="cropper"
              :src="picture"
              :stencil-props="{
                aspectRatio: 10/12
              }"
              @change="change"
            ></cropper>
            <br>
            <br>
            <br>
            <button class="btn btn-light mt-3 mr-3 p-1 btn-sm btn-block" v-on:click="uploadImage"><b>Upload Picture</b></button>
          </div>
        </b-modal>
      </div>
      <div class="d-flex flex-row col-md-6">
        <input class="form-control d-none" type="file" id="bgPic" accept="image/png, image/jpg, image/jpeg" ref="bgPic" v-on:change="addBackgroundPic">
        <div class="pl-sm-4 pl-2 pt-2">
          <h6 class="font-weight-bolder">Background Picture</h6>
          <p>Accepted file type .png/jpg/jpeg Less than 1MB</p>
          <button class="btn btn-light mr-3 p-1 btn-sm" v-on:click="addThing">Upload</button>
        </div>
      </div>
      </div>
      <div class="py-2 col-12 border-bottom">
        <div class="row py-2">
          <div class="col-md-6 px-2"> <label for="username">Username</label> <input type="text" id="username" class="bg-light form-control" :placeholder="this.Usettings.username" v-model="username"> </div>
          <div class="col-md-6 px-2 pt-md-0 pt-3">
            <label for="username">Handle</label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">!#@</span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" v-model="handle" disabled aria-describedby="basic-addon1">
            </div>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-md-12 px-2"> <label for="email">Email Address</label> <input type="email"  id="email" class="bg-light form-control" v-model="email" placeholder="steve_@email.com"> </div>
        </div>
        <div class="row py-2">
          <div class="col-md-6 px-2">
            <label for="country">Country</label>
            <select name="country" id="country" class="bg-light" v-model="country">
              <option value="Afganistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua & Barbuda">Antigua & Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire">Bonaire</option>
              <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Canary Islands">Canary Islands</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Channel Islands">Channel Islands</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos Island">Cocos Island</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote DIvoire">Cote DIvoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curaco">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands">Falkland Islands</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Ter">French Southern Ter</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Great Britain">Great Britain</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Indonesia">Indonesia</option>
              <option value="India">India</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea North">Korea North</option>
              <option value="Korea South">Korea South</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Midway Islands">Midway Islands</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Nambia">Nambia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherland Antilles">Netherland Antilles</option>
              <option value="Netherlands">Netherlands (Holland, Europe)</option>
              <option value="Nevis">Nevis</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau Island">Palau Island</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Phillipines">Philippines</option>
              <option value="Pitcairn Island">Pitcairn Island</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Republic of Montenegro">Republic of Montenegro</option>
              <option value="Republic of Serbia">Republic of Serbia</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="St Barthelemy">St Barthelemy</option>
              <option value="St Eustatius">St Eustatius</option>
              <option value="St Helena">St Helena</option>
              <option value="St Kitts-Nevis">St Kitts-Nevis</option>
              <option value="St Lucia">St Lucia</option>
              <option value="St Maarten">St Maarten</option>
              <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
              <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
              <option value="Saipan">Saipan</option>
              <option value="Samoa">Samoa</option>
              <option value="Samoa American">Samoa American</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome & Principe">Sao Tome & Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Tahiti">Tahiti</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad & Tobago">Trinidad & Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks & Caicos Is">Turks & Caicos Is</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Erimates">United Arab Emirates</option>
              <option value="United States of America">United States of America</option>
              <option value="Uraguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City State">Vatican City State</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
              <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
              <option value="Wake Island">Wake Island</option>
              <option value="Wallis & Futana Is">Wallis & Futana Is</option>
              <option value="Yemen">Yemen</option>
              <option value="Zaire">Zaire</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
          <div class="col-md-6 px-2 pt-md-0 pt-3" id="lang">
            <label for="language">Language</label>
            <div class="arrow">
              <select name="language" id="language" class="bg-light" v-model="language">
              <option value="en" selected>English (En) </option>
              <option value="fr">Français (Fr)</option>
              <option value="pt">Português (Pt)</option>
              <option value="pt">Hausa (Ha)</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row py-2 px-2">
            <label for="floatingTextarea">Leave Your Bio here </label>
            <b-form-textarea
                id="textarea-state"
                v-model="bio"
                placeholder="Max 150 Characters"
                rows="3"
              ></b-form-textarea>
          </div>
          <div class="d-flex flex-row justify-content-end mb-3 pt-2">
            <button class="btn btn-primary mr-3 p-1 btn-sm" v-on:click="changeSettings('settings')">Save Changes</button>
            <button class="btn border button p-1 btn-sm">Cancel</button>
          </div>
      </div>
      <div class="py-2 col-12 border-bottom">
        <div class="row py-2">
          <h4 class="text-center font-weight-bold" style="color: #1B9494;">Security</h4>
          <h5 class="text-center mb-3 px-2">Change Your Number</h5>
          <div class="col-md-6 px-2">
            <label for="newn">New Number</label>
            <vue-tel-input v-model="newphone" mode="international" id="newn"></vue-tel-input>
          </div>
          <div class="col-md-6 px-2">
            <label for="oldn">Old Number</label>
            <vue-tel-input v-model="phone" mode="international" id="oldn"></vue-tel-input>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-end mb-3 pt-2">
          <button class="btn btn-primary mr-3 p-1 btn-sm" v-on:click="changeSettingsPhone('security')">Save Changes</button>
          <button class="btn border button p-1 btn-sm">Cancel</button>
        </div>
      </div>
<!--      TODO: Paiements Managements Disable-->
<!--      <div class="py-2 col-12 pb-4 border-bottom" v-if="this.$store.state.post_payment == 0">-->
<!--        <div class="row py-2">-->
<!--          <h4 class="text-center font-weight-bold" style="color: #1B9494;">Paiement</h4>-->
<!--          <h5 class="text-center mb-3 px-2">Choose Your Option To Activate Monetisation</h5>-->
<!--          <div class="col-md-6 px-2">-->
<!--            <div class="card border-0">-->
<!--              <div class="card-body text-center">-->
<!--                <div class="rounded-circle card-icon mb-3 mx-auto" >-->
<!--                  <span class="fa fa-money-bill-wave-alt text-18"></span>-->
<!--                </div>-->
<!--                <h5 class="card-title text-primary fw-bold text-18 text-primary mb-0 ">Monetisation Posts</h5>-->
<!--                <p class="card-text px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam. Ut enim ad minim veniam.</p>-->
<!--                <button class="btn btn-primary mr-3 p-1 btn-sm mt-2" v-on:click="activePostsPaiements()" v-if="this.$store.state.post_payment == 0">Start Paiement</button>-->
<!--                <button class="btn btn-primary mr-3 p-1 btn-sm mt-2" v-on:click="finishPostPaiement()" v-if="this.$store.state.post_payment == 1 && this.$store.state.account_payment == 1">Finish Paiement</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-6 px-2">-->
<!--            <div class="card border-0">-->
<!--              <div class="card-body text-center">-->
<!--                <div class="rounded-circle card-icon mb-3 mx-auto" >-->
<!--                  <span class="fa fa-money-bill-wave-alt text-18"></span>-->
<!--                </div>-->
<!--                <h5 class="card-title text-primary fw-bold text-18 text-primary mb-0">Monetisation Compte</h5>-->
<!--                <p class="card-text px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam. Ut enim ad minim veniam.</p>-->
<!--                <button class="btn btn-primary mr-1 p-1 btn-sm mt-2" v-on:click="activeAccountPaiements()" v-if="this.$store.state.account_payment == 0">Start Paiement</button>-->
<!--                <button class="btn btn-primary mr-3 p-1 btn-sm mt-2" v-on:click="finishPostPaiement()" v-if="this.$store.state.post_payment == 1 && this.$store.state.account_payment == 1">Finish Paiement</button>-->
<!--                <button class="btn btn-primary mr-3 p-1 btn-sm mt-2" v-on:click="activeAccountPaiements()" v-if="this.$store.state.account_payment == 3">Upgrade Your Account</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="py-2 col-12 mt-3 border-bottom">-->
<!--        <div class="row py-2">-->
<!--          <h4 class="text-center font-weight-bold" style="color: #1B9494;">Paiements DashBoards</h4>-->
<!--          <h5 class="text-center mb-3 px-2">Choose Your Option To See Ur DashBoard</h5>-->
<!--          <div class="col-md-6 px-2">-->
<!--            <div class="card border-0">-->
<!--              <div class="card-body text-center">-->
<!--                <div class="rounded-circle card-icon mb-3 mx-auto" >-->
<!--                  <span class="fa fa-money-bill-wave-alt text-18"></span>-->
<!--                </div>-->
<!--                <h5 class="card-title text-primary fw-bold text-18 text-primary mb-0 ">Customer Portal</h5>-->
<!--                <p class="card-text px-2">C'est dans ce Portal que vous verrez vos achats et vos subscriptions et les differents Montants</p>-->
<!--                <button class="btn btn-primary mr-3 p-1 btn-sm mt-2" v-on:click="checkPaiements()">Check Paiements</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-6 px-2">-->
<!--            <div class="card border-0">-->
<!--              <div class="card-body text-center">-->
<!--                <div class="rounded-circle card-icon mb-3 mx-auto" >-->
<!--                  <span class="fa fa-money-bill-wave-alt text-18"></span>-->
<!--                </div>-->
<!--                <h5 class="card-title text-primary fw-bold text-18 text-primary mb-0">Paiement Portal</h5>-->
<!--                <p class="card-text px-2">Par Contre ICI vous avez à votre disposition des retours sur vos monétisatisations de Posts et de Compte </p>-->
<!--                <button class="btn btn-primary mr-1 p-1 btn-sm mt-2" v-if="manageBool" v-on:click="finishPostPaiement()">Manage Account</button>-->
<!--                <button class="btn btn-primary mr-1 p-2 btn-sm mt-2" v-if="monetiseBol" disabled>Monetise Ur Account First</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="py-2 col-12 pt-3 mt-3">
        <div class="row py-2 border-bottom">
          <h5 class="text-center mb-3 px-2">Get Your <span class="font-weight-bold" style="color: #1B9494;">Rescue</span> Code</h5>
          <div class="col-md-12 px-2">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="0157400" v-model="code" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <span class="input-group-text cursor-pointer" id="basic-addon2" v-on:click="changeSettingsCode('rescue')">Code </span>
            </div>
          </div>
        </div>
      </div>
      <b-modal id="modal-account-paiement" hide-footer centered title="Account Paiement">
        <div class="card-body text-center p-lg-3">
          <h6 class="text-primary fw-bold mb-3">Estimate what you could make on Odaaay</h6>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="dollars">
            <option value="5" selected>5$/month</option>
            <option value="7">7$/month</option>
            <option value="10">10$/month</option>
            <option value="15">15$/month</option>
            <option value="30">30$/month</option>
            <option value="75">75$/month</option>
          </select>
          <h2 class="text-primary fw-bold d-inline-block">${{ dollars }}</h2> <span>per month <i class="far fa-question-circle"></i></span>
          <button href="#" class="btn btn-lg btn-light text-primary btn-block my-2 py-2 px-lg-4 text-16" @click="AccountPaid()">Paid</button>
          <div id="emailHelp" class="form-text">Writers keep 90% of their revenue minus credit card fees.</div>
        </div>
      </b-modal>
      <div class="d-sm-flex align-items-center pt-3" id="deactivate">
          <div>
            <h6 class="font-weight-bolder">Deactivate your account</h6>
            <p>Details about your company account and password</p>
          </div>
          <div class="ml-auto"> <button class="btn danger p-1" v-on:click="deactivated('deactivate')">Deactivate</button> </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'
import {VueTelInput} from "vue-tel-input"
import 'vue-advanced-cropper/dist/style.css';
import {mapGetters, mapState} from "vuex";

export default {
  name: "profileSetting",
  //
  // asyncData(store) {
  //   const settings = store.state.Usettings
  //   console.log(settings)
  //
  //   return {
  //     'settings': settings
  //   }
  // },

  data() {
    return{
      name: '',
      subscribers: '50',
      dollars: '5',
      nameState: null,
      submittedNames: [],
      newn: '',
      oldn: '',
      type:  '',
      thumbUrl:  false,
      manageBool: false,
      monetiseBol: false,
      img: 'https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg',
      showRescue: false,
      username:  this.$store.state.Usettings.username,
      email: this.$store.state.Usettings.email,
      phone: this.$store.state.Usettings.phone,
      newphone : '',
      language: '',
      bio: this.$store.state.Usettings.bio,
      background: this.$store.state.Usettings.background,
      country: this.$store.state.Usettings.country,
      picture: this.$store.state.Usettings.picture,
      handle: this.$store.state.Usettings.handle,
      code: this.$store.state.Usettings.rescue,
      result: ''
    };
  },

  components: {
    VueTelInput,
    Cropper
  },

  computed: {
    ...mapState(['Usettings']),
    ...mapGetters({
      LogIn: 'loggedIn'
    }),
  },

  watch: {
    'thumbUrl': function() {
      if (this.thumbUrl === true) {
        this.getUserSettings()
        this.$nuxt.refresh()
      }
    }
  },
  methods: {
    AccountPaid(){
      this.$axios
        .post('/register', {
            type: 'all',
            price: parseInt(this.dollars, 10),
            lang: this.$i18n.locale
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((response) => {
          this.getUserSettings()
          if(response.data.status === 1) {
            this.$notification.new("Your Account 💕 Is a paid Account", {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
            this.$nuxt.refresh()
            this.getUserSettings()
            this.$bvModal.hide('modal-account-paiement')
            window.location.reload()
            window.open(response.data.link, '_blank');
          }
          if(response.data.status === 2) {
            this.$notification.new("You are alreadY paid Account", {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
          }
        })
        .catch((error) => {
        })
    },
    changeSettings(type_post){
      if (!this.code) {
        this.code = ''
      }
      if (!this.bio) {
        this.bio = ''
      }
      if (!this.email) {
        this.email = ''
      }
      this.$axios
        .post('/user/prefs', {
            type: type_post,
            username: this.username,
            email: this.email,
            phone: this.phone,
            newphone: this.newphone,
            language_id: this.language,
            bio: this.bio,
            country: this.country,
            handle: this.handle,
            code: this.code,
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((response) => {
          if (response.data.status === 1) {
            this.getUserSettings()
            this.$nuxt.refresh()
            this.vm.$forceUpdate()
            this.$notification.new("Update Settings Done", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    activePostsPaiements(){
      if(confirm('Voulez Vous Changez de Status?')){
        this.$axios
          .post('/register', {
              type: 'post',
              // price: '',
              lang: this.$i18n.locale
            },
            {
              headers: {
                'API-KEY': this.$store.state.token
              }
            }
          )
          .then((response) => {
            if(response.data.status === 1) {
              this.$notification.new("Your Account 💕 Is a paid Account", {
                timer: 15,
                position: 'bottomRight',
                type: 'danger',
                showLeftIcn: true,
                showCloseIcn: true
              })
              window.open(response.data.link, '_blank');
            }
            if(response.data.status === 2) {
              this.$notification.new("You are alreadY paid Account", {
                timer: 15,
                position: 'bottomRight',
                type: 'danger',
                showLeftIcn: true,
                showCloseIcn: true
              })
            }
          })
          .catch((error) => {
          })
      }
    },
    finishPostPaiement(){
      this.$axios
        .post('/portal', {
            type: true,
            // price: '',
            lang: this.$i18n.locale
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((response) => {
          this.getUserSettings()
          if(response.data.status === 0) {
            this.thumbUrl = true
            this.$notification.new("User has not finish on boarding", {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
            this.finishOnBoarding()
          }
          if(response.data.status === 1) {
            this.$notification.new("Manage Your Account, Odaaay Stripe", {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
            window.open(response.data.link, '_blank');
          }
        })
        .catch((error) => {
        })
    },
    finishOnBoarding(){
      this.$axios
        .get('/refresh/' + this.$store.state.Usettings.uuid + '/' + this.$i18n.locale)
        .then((response) => {
          this.getUserSettings()
          if(response.data.status === 1) {
            this.thumbUrl = true
            this.$notification.new("On Boarding Page, Finish Process Please", {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
            window.open(response.data.link, '_blank');
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    activeAccountPaiements(){
      if(confirm('Voulez Vous Changez de Status?')){
        this.$bvModal.show('modal-account-paiement')
      }
    },
    checkPaiements(){
      this.$axios
        .post('/portal', {
            type: false,
            // price: '',
            lang: this.$i18n.locale
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((response) => {
          if(response.data.status === 1) {
            this.thumbUrl = true
            this.$notification.new("User has not finish on boarding", {
              timer: 15,
              position: 'bottomRight',
              type: 'danger',
              showLeftIcn: true,
              showCloseIcn: true
            })
            window.open(response.data.link, '_blank');
          }
        })
        .catch((error) => {
        })
    },
    changeSettingsPhone(type_post){
      this.$axios
        .post('/user/prefs', {
            type: type_post,
            phone: this.phone,
            newphone: this.newphone,
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((response) => {
          this.thumbUrl = true
          // if (response.data.status === 1) {
          //   this.$notification.new("Update Settings Done", {
          //     timer: 15,
          //     position: 'bottomRight',
          //     type: 'succes',
          //     showLeftIcn: true,
          //     showCloseIcn: true
          //   });
          // }
        })
        .catch((error) => {
          if (error.response.data.status === 0) {
            this.showRescue = !this.showRescue
            this.$notification.new("This phone number cannot receive a code, Please use rescue Code ", {
              timer: 15,
              position: 'bottomRight',
              type: 'warning',
              showLeftIcn: true,
              showCloseIcn: true
            })
            this.newphone = ''
            this.getSettingsCode('rescue')
          }
        })
    },
    getSettingsCode(type_post){
      this.$axios
        .get('/user/prefs',
          {
            headers: {
              'API-KEY': this.$store.state.token
            },
            params: {
              type: type_post,
            }
          }
        )
        .then((response) => {
          this.getUserSettings()
          this.code = response.data.user.rescue
          this.$notification.new("THis Is Your New Rescue Code", {
            timer: 15,
            position: 'bottomRight',
            type: 'success',
            showLeftIcn: true,
            showCloseIcn: true
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },

    changeSettingsCode(type_post){
      this.$axios
        .post('/user/prefs', {
            type: type_post
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            }
          }
        )
        .then((response) => {
          if(response.data.status === 1) {
            this.getSettingsCode('rescue')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },

    change({coordinates, canvas, image}) {
      // this.result = {
      //   coordinates,
      //   image,
      //   canvas
      // };
      this.result = canvas.toDataURL()
      // const canv = result.canvas
      // console.log(canvas.toDataURL())
      // console.log('***********')
      // console.log(this.result)
    },

    deactivated(type_post){
      if (confirm('Are you sure you want to delete Your Account 💕 ?')) {
        this.$router.push(`/${this.$i18n.locale}/delete-account?delete=false`)
      } else {
        this.$notification.new("Good Choice", {
          timer: 15,
          position: 'bottomRight',
          type: 'success',
          showLeftIcn: true,
          showCloseIcn: true
        })
      }
    },
    onAddThing: function() {
      this.$refs.profilePic.click()
    },
    addThing: function() {
      this.$refs.bgPic.click()
    },
    addProfilePic(e){
      let image = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = ev => {
        this.picture = ev.target.result
      }
      this.$refs['my-modal'].show()
    },
    addBackgroundPic(e){
      let image = e.target.files[0]
      // type = type.replace(/(.*)\//g, '')
      const formData = new FormData()
      formData.append('file', image)
      formData.append('name', image.name)
      this.$axios
        .post(
          '/backdrop', formData,
          {
            headers: {
              'API-KEY': this.$store.state.token,
              'Content-Type': 'multipart/form-data'
            },
          }
        )
        .then((response) => {
          if(response.data.status === 1 ){
            this.thumbUrl = true
            this.$notification.new("Thumb Upload😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    uploadImage() {
      // let data = this.result.image.src
      // console.log('b\'' + data.split(',')[1] + '\'')
      this.fileUpload()
    },
    fileUpload() {

      let data = this.result
      let type = data.substring(15, 11)

      if(type == 'png;'){
        type = 'png'
      }

      let datas = data.split(',')[1]

      this.$axios
        .post(
          '/user/upload', {
            name: type,
            file: datas
          },
          {
            headers: {
              'API-KEY': this.$store.state.token
            },
          }
        )
        .then((response) => {
          if(response.data.status === 1 ){
            this.thumbUrl = response.data.thumb_url
            this.$refs['my-modal'].hide()
            this.thumbUrl = true
            this.$notification.new("Thumb Upload😉", {
              timer: 15,
              position: 'bottomRight',
              type: 'success',
              showLeftIcn: true,
              showCloseIcn: true
            });
          }
        })
        .catch((error) => {
          console.log(error)
        })
      // this.createImage(this.thumbUrl)
    },
    getUserSettings(){
      if (this.LogIn) {
        this.$store
          .dispatch('getUserSettings')
          .then((response) => {
          })
          .catch((error) => {
          })
      }
    },
  },

  mounted() {

    if(this.$store.state.post_payment != 0 || this.$store.state.account_payment != 0){
      this.manageBool = true
    } else {
      this.manageBool = false
    }

    if(this.$store.state.post_payment == 0 && this.$store.state.account_payment == 0){
      this.monetiseBol = true
    } else {
      this.monetiseBol = false
    }

    if (this.$store.state.Usettings.Lang === null){
      this.language = 'en'
    }else {
      for (let i = 0; i < 1; i++) {
        this.language = this.$store.state.Usettings.Lang[i].code
      }
    }

    if (this.$store.state.Usettings.handle === null){
      this.handle = this.$store.state.Usettings.username
    }

    if (this.$store.state.Usettings.country === null){
      this.country = 'Afghanistan'
    }
  },
  created() {

  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: aliceblue
}


h4 {
  letter-spacing: -1px;
  font-weight: 400
}

.img {
  width: 70px;
  height: 70px;
  border-radius: 6px;
  object-fit: cover
}

#img-section p,
#deactivate p {
  font-size: 12px;
  color: #777;
  margin-bottom: 10px;
  text-align: justify
}

#img-section b,
#img-section button,
#deactivate b {
  font-size: 14px
}

label {
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 500;
  color: #777;
  padding-left: 3px
}

.form-control {
  border-radius: 10px;
  padding-left: 14px
}

input[placeholder] {
  font-weight: 500
}

.form-control:focus {
  box-shadow: none;
  border: 1.5px solid #0779e4
}

select {
  display: block;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 40px;
  padding: 5px 10px
}

select:focus {
  outline: none
}

.button {
  background-color: #fff;
  color: #0779e4
}

.button:hover {
  background-color: #0779e4;
  color: #fff
}

.btn-primary {
  background-color: #0779e4
}

.danger {
  background-color: #fff;
  color: #e20404;
  border: 1px solid #ddd
}

.danger:hover {
  background-color: #e20404;
  color: #fff
}

@media(max-width:576px) {
  .wrapper {
    padding: 25px 20px
  }

  #deactivate {
    line-height: 18px
  }
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem !important;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
