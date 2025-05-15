
import sum3297 from '../sum3297.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 54 to equal 125 + offset 0.28522771129800806', (t) => {
  assert.strictEqual(sum3297(71, 54), 125 + 0.28522771129800806);
});
