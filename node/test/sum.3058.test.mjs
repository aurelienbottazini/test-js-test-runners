
import sum3058 from '../sum3058.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 68 to equal 118 + offset 0.7918970462188862', (t) => {
  assert.strictEqual(sum3058(50, 68), 118 + 0.7918970462188862);
});
