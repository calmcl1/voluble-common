"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scopes;
(function (scopes) {
    scopes["ContactAdd"] = "contact:add";
    scopes["ContactView"] = "contact:view";
    scopes["ContactEdit"] = "contact:edit";
    scopes["ContactDelete"] = "contact:delete";
    scopes["MessageRead"] = "message:read";
    scopes["MessageSend"] = "message:send";
    scopes["BlastSend"] = "blast:send";
    scopes["UserAdd"] = "user:add";
    scopes["UserEdit"] = "user:edit";
    scopes["UserDelete"] = "user:delete";
    scopes["UserView"] = "user:view";
    scopes["OrganizationEdit"] = "organization:edit";
    scopes["OrganizationDelete"] = "organization:delete";
    scopes["OrganizationOwner"] = "organization:owner";
    scopes["ServiceView"] = "service:view";
    scopes["ServicechainView"] = "servicechain:view";
    scopes["ServicechainAdd"] = "servicechain:add";
    scopes["ServicechainDelete"] = "servicechain:delete";
    scopes["ServicechainEdit"] = "servicechain:edit";
    scopes["VolubleAdmin"] = "voluble:admin";
})(scopes = exports.scopes || (exports.scopes = {}));
var MessageStates;
(function (MessageStates) {
    MessageStates["MSG_PENDING"] = "MSG_PENDING";
    MessageStates["MSG_SENDING"] = "MSG_SENDING";
    MessageStates["MSG_DELIVERED_SERVICE"] = "MSG_DELIVERED_SERVICE";
    MessageStates["MSG_DELIVERED_USER"] = "MSG_DELIVERED_USER";
    MessageStates["MSG_READ"] = "MSG_READ";
    MessageStates["MSG_REPLIED"] = "MSG_REPLIED";
    MessageStates["MSG_FAILED"] = "MSG_FAILED";
    MessageStates["MSG_ARRIVED"] = "MSG_ARRIVED";
})(MessageStates = exports.MessageStates || (exports.MessageStates = {}));
var MessageDirections;
(function (MessageDirections) {
    MessageDirections["INBOUND"] = "INBOUND";
    MessageDirections["OUTBOUND"] = "OUTBOUND";
})(MessageDirections = exports.MessageDirections || (exports.MessageDirections = {}));
var PlanTypes;
(function (PlanTypes) {
    PlanTypes["PAYG"] = "PAYG";
    PlanTypes["PAY_IN_ADVANCE"] = "PAY_IN_ADVANCE";
})(PlanTypes = exports.PlanTypes || (exports.PlanTypes = {}));
