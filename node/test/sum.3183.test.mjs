
import sum3183 from '../sum3183.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 41 to equal 71 + offset 0.9029292762741594', (t) => {
  assert.strictEqual(sum3183(30, 41), 71 + 0.9029292762741594);
});
