System.register(["./index-legacy.4af04eee.js"],(function(e){"use strict";var o;return{setters:[function(e){o=e.bx}],execute:function(){var r={Aliyundrive:{order_bys:{name:"Name",size:"Size",updated_at:"Updated at",created_at:"Created at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",root_folder_id:"Root folder id",refresh_token:"Refresh token",order_by:"Order by"},Local:{root_folder_path:"Root folder path",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},PikPak:{root_folder_id:"Root folder id",username:"Username",password:"Password"},MediaTrack:{access_token:"Access token",project_id:"Project id",root_folder_id:"Root folder id",order_by:"Order by",order_bys:{updated_at:"Updated at",title:"Title",size:"Size"},order_desc:"Order desc"},BaiduPhoto:{refresh_token:"Refresh token",show_type:"Show type",show_types:{root_only_file:"Root only file",root:"Root",root_only_album:"Root only album"},album_id:"Album id",client_id:"Client id",client_secret:"Client secret"},SFTP:{address:"Address",username:"Username",private_key:"Private key",password:"Password",root_folder_path:"Root folder path"},"139Yun":{cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},cloud_id:"Cloud id",account:"Account"},drivers:{GoogleDrive:"GoogleDrive",Virtual:"Virtual",Onedrive:"Onedrive","189CloudPC":"189CloudPC",FTP:"FTP",ThunderExpert:"ThunderExpert",SFTP:"SFTP","189Cloud":"189Cloud",Local:"Local",Thunder:"Thunder",Aliyundrive:"Aliyundrive",PikPak:"PikPak",MediaTrack:"MediaTrack",YandexDisk:"YandexDisk","123Pan":"123Pan",BaiduPhoto:"BaiduPhoto",Teambition:"Teambition","139Yun":"139Yun",WebDav:"WebDav",S3:"S3",Quark:"Quark",BaiduNetdisk:"BaiduNetdisk",USS:"USS"},Teambition:{cookie:"Cookie",root_folder_id:"Root folder id",order_by:"Order by",order_direction:"Order direction",region:"Region",regions:{china:"China",international:"International"},project_id:"Project id",order_bys:{fileName:"FileName",fileSize:"FileSize",updated:"Updated",created:"Created"},order_directions:{Asc:"Asc",Desc:"Desc"}},USS:{operator_password:"Operator password",custom_host:"Custom host",sign_url_expire:"Sign url expire",root_folder_path:"Root folder path",bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name"},"123Pan":{root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username",password:"Password",order_by:"Order by",order_bys:{updateAt:"UpdateAt",createAt:"CreateAt",name:"Name",fileId:"FileId"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"}},Virtual:{min_file_size:"Min file size",root_folder_path:"Root folder path",num_file:"Num file",num_folder:"Num folder",max_file_size:"Max file size"},"189CloudPC":{order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{desc:"Desc",asc:"Asc"},types:{family:"Family",personal:"Personal"},validate_code:"Validate code",password:"Password",root_folder_id:"Root folder id",type:"Type",family_id:"Family id",rapid_upload:"Rapid upload",username:"Username"},FTP:{address:"Address",username:"Username",password:"Password",root_folder_path:"Root folder path"},Quark:{order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},cookie:"Cookie",root_folder_id:"Root folder id",order_by:"Order by",order_bys:{file_type:"File type",file_name:"File name",updated_at:"Updated at"}},ThunderExpert:{login_types:{user:"User",refresh_token:"Refresh token"},"captcha_sign-tips":"sign type is captcha_sign,this is required",client_id:"Client id",user_agent:"User agent",captcha_token:"Captcha token",download_user_agent:"Download user agent",login_type:"Login type",refresh_token:"Refresh token",timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required","refresh_token-tips":"login type is refresh_token,this is required",algorithms:"Algorithms",client_version:"Client version",package_name:"Package name",root_folder_id:"Root folder id",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},username:"Username",password:"Password",captcha_sign:"Captcha sign",device_id:"Device id",client_secret:"Client secret",sign_type:"Sign type","username-tips":"login type is user,this is required","password-tips":"login type is user,this is required","algorithms-tips":"sign type is algorithms,this is required"},GoogleDrive:{"order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},client_id:"Client id",client_secret:"Client secret",root_folder_id:"Root folder id",refresh_token:"Refresh token",order_by:"Order by"},WebDav:{root_folder_path:"Root folder path",vendor:"Vendor",vendors:{sharepoint:"Sharepoint",other:"Other"},address:"Address",username:"Username",password:"Password"},"189Cloud":{password:"Password",root_folder_id:"Root folder id",username:"Username"},BaiduNetdisk:{order_by:"Order by",order_bys:{name:"Name",time:"Time",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},download_api:"Download api",refresh_token:"Refresh token",root_folder_path:"Root folder path",download_apis:{official:"Official",crack:"Crack"},client_id:"Client id",client_secret:"Client secret"},Thunder:{captcha_token:"Captcha token",root_folder_id:"Root folder id",username:"Username",password:"Password"},S3:{secret_access_key:"Secret access key",custom_host:"Custom host",sign_url_expire:"Sign url expire",placeholder:"Placeholder",force_path_style:"Force path style",bucket:"Bucket",endpoint:"Endpoint",access_key_id:"Access key id",list_object_versions:{v1:"V1",v2:"V2"},root_folder_path:"Root folder path",region:"Region",list_object_version:"List object version"},Onedrive:{region:"Region",regions:{global:"Global",cn:"Cn",us:"Us",de:"De"},is_sharepoint:"Is sharepoint",client_secret:"Client secret",redirect_uri:"Redirect uri",site_id:"Site id",root_folder_path:"Root folder path",client_id:"Client id",refresh_token:"Refresh token"},YandexDisk:{root_folder_path:"Root folder path",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",order_by:"Order by",order_bys:{path:"Path",created:"Created",modified:"Modified",size:"Size",name:"Name"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"}}},a={refresh:"Refresh",add:"Add",edit:"Edit",delete:"Delete",save:"Save",update:"Update",copied:"Copied",delete_success:"Deleted successfully",save_success:"Saved successfully",update_success:"Updated successfully",choose:"Choose",confirm:"Confirm",cancel:"Cancel",delete_confirm:"Are you sure you want to delete [{{name}}]?",operations:"Operations",yes:"Yes",no:"No",clear:"Clear",choose_folder:"Select folder",choose_or_input_path:"Select folder or input path",disable:"Disable",enable:"Enable",ok:"OK",back:"Back",have_account:"Have an account?",go_login:"Go to login",close:"Close",no_support_now:"Not currently supported",empty_input:"Please enter"},i={obj:{name:"Name",size:"Size",modified:"Modified"},preview:{download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing"},load_more:"Load more",no_more:"No more",input_password:"Please input password",toolbar:{more:"More",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",add_aria2:"Add to Aria2 download","add_aria2-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings"},upload:{add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",only_files_or_one_folder:"Only files or one folder can be dragged at a time.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},local_settings:{aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},package_download:{current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},footer:{powered_by:"Powered by AList",manage:"Manage"}},t={title:"Login to the ALIST","username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:"Remember me",forget:"Forget password?",forget_url:"https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",clear:"Clear",login:"Login",use_guest:"Browse as a guest",success:"Login successfully"},s={sidemenu:{dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy",home:"Home"},title:"AList Manage",not_admin:"You are not admin user, please login with admin account.",logout_success:"Logout successfully",send:"Send",recieve:"Recieve",recieved_msgs:"Recieved messages","add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},d={path:"Path",password:"Password",write:"Write",hide:"Hide",readme:"Readme",apply_sub:"Apply to sub folder",hide_help:"One regular expression per line",readme_help:"Support markdown content or markdown link"},n={external_previews:"External previews",link_expiration:"Link expiration",ocr_api:"Ocr api",aria2_uri:"Aria2 uri",version:"Version",main_color:"Main color",home_containers:{max_980px:"Max 980px",hope_container:"Hope container"},customize_head:"Customize head",privacy_regs:"Privacy regs",aria2_secret:"Aria2 secret",base_path:"Base path",site_title:"Site title",default_page_size:"Default page size",hide_files:"Hide files",customize_body:"Customize body",pagination_type:"Pagination type",favicon:"Favicon",announcement:"Announcement",iframe_previews:"Iframe previews",package_download:"Package download",image_types:"Image types",audio_cover:"Audio cover",api_url:"Api url",pagination_types:{all:"All",pagination:"Pagination",load_more:"Load more",auto_load_more:"Auto load more"},logo:"Logo",home_icon:"Home icon",text_types:"Text types",audio_types:"Audio types",video_types:"Video types",proxy_types:"Proxy types",audio_autoplay:"Audio autoplay",video_autoplay:"Video autoplay",home_container:"Home container",token:"Token"},l={aria2:"Aria2",aria2_version:"Aria2 Version:",set_aria2:"Set aria2",copy_token:"Copy Token",reset_token:"Reset Token",reset_token_success:"Reset Token Successfully",unkown_type:"Unknown type"},c={common:{mount_path:"Mount Path",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"}}},p={down:"Download file to local machine",transfer:"Transfer downloaded file to corresponding storage",upload:"Upload file to corresponding storage",copy:"Copy file from a storage to another storage",done:"Completed",undone:"Running",pending:"Pending",running:"Running",canceling:"Canceling",succeeded:"Succeeded",canceled:"Canceled",errored:"Errored"},_={permissions:{see_hides:"Can see hides",access_without_password:"Access without password",add_aria2:"Add aria2 tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},username:"Username",password:"Pssword",base_path:"Base path",role:"Role",permission:"Permission",update_profile:"Update Profile",update_profile_success:"Update profile successfully, please re-login.",change_username:"Change Username",change_password:"Change Password","change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:"Enable 2FA","2fa_already_enabled":"2FA is already enabled",scan_qr:"Scan the QR code to save the secret key",input_code:"Input the code of your 2FA app",verify:"Verify","guest-tips":"You are currently visiting as a guest.",modify_nothing:"So you cannot modify anything in the manage page."},u=Object.assign({"./drivers.json":r,"./global.json":a,"./home.json":i,"./index.json":o,"./login.json":t,"./manage.json":s,"./metas.json":d,"./settings.json":n,"./settings_other.json":l,"./storages.json":c,"./tasks.json":p,"./users.json":_}),m=e("default",{});for(var h in u)m[h.split("/")[1].split(".")[0]]=u[h]}}}));
