
import sum318 from '../sum318.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 73 to equal 139 + offset 0.2614639200798562', (t) => {
  assert.strictEqual(sum318(66, 73), 139 + 0.2614639200798562);
});
