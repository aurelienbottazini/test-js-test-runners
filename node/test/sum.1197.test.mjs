
import sum1197 from '../sum1197.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 2 to equal 83 + offset 0.21279440826456597', (t) => {
  assert.strictEqual(sum1197(81, 2), 83 + 0.21279440826456597);
});
