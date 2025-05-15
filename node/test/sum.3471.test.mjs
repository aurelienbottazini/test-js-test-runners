
import sum3471 from '../sum3471.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 41 to equal 78 + offset 0.13496459619423806', (t) => {
  assert.strictEqual(sum3471(37, 41), 78 + 0.13496459619423806);
});
