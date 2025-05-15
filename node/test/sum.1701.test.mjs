
import sum1701 from '../sum1701.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 4 to equal 67 + offset 0.32493781906830854', (t) => {
  assert.strictEqual(sum1701(63, 4), 67 + 0.32493781906830854);
});
