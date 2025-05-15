
import sum3261 from '../sum3261.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 70 to equal 149 + offset 0.14029984024383568', (t) => {
  assert.strictEqual(sum3261(79, 70), 149 + 0.14029984024383568);
});
