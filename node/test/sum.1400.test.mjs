
import sum1400 from '../sum1400.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 71 to equal 116 + offset 0.9301645967629947', (t) => {
  assert.strictEqual(sum1400(45, 71), 116 + 0.9301645967629947);
});
