
import sum3085 from '../sum3085.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 15 to equal 81 + offset 0.5490448487366015', (t) => {
  assert.strictEqual(sum3085(66, 15), 81 + 0.5490448487366015);
});
