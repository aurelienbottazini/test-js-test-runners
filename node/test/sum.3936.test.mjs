
import sum3936 from '../sum3936.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 42 to equal 90 + offset 0.33524754759731956', (t) => {
  assert.strictEqual(sum3936(48, 42), 90 + 0.33524754759731956);
});
