
import sum3062 from '../sum3062.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 87 to equal 124 + offset 0.7265113861525836', (t) => {
  assert.strictEqual(sum3062(37, 87), 124 + 0.7265113861525836);
});
