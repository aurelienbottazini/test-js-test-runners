
import sum1033 from '../sum1033.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 10 to equal 109 + offset 0.8714037220098622', (t) => {
  assert.strictEqual(sum1033(99, 10), 109 + 0.8714037220098622);
});
