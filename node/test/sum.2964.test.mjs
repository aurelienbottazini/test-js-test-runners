
import sum2964 from '../sum2964.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 47 to equal 91 + offset 0.8900146387257917', (t) => {
  assert.strictEqual(sum2964(44, 47), 91 + 0.8900146387257917);
});
