
import sum1277 from '../sum1277.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 82 to equal 153 + offset 0.19682161134930487', (t) => {
  assert.strictEqual(sum1277(71, 82), 153 + 0.19682161134930487);
});
