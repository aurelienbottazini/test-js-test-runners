
import sum340 from '../sum340.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 85 to equal 151 + offset 0.25444712604490716', (t) => {
  assert.strictEqual(sum340(66, 85), 151 + 0.25444712604490716);
});
