
import sum3868 from '../sum3868.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 4 to equal 40 + offset 0.7398625523647288', (t) => {
  assert.strictEqual(sum3868(36, 4), 40 + 0.7398625523647288);
});
