
import sum482 from '../sum482.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 43 to equal 72 + offset 0.5448332654706256', (t) => {
  assert.strictEqual(sum482(29, 43), 72 + 0.5448332654706256);
});
