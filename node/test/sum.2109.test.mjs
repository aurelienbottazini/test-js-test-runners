
import sum2109 from '../sum2109.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 92 to equal 176 + offset 0.1401742801051622', (t) => {
  assert.strictEqual(sum2109(84, 92), 176 + 0.1401742801051622);
});
