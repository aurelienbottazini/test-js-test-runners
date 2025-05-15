
import sum4452 from '../sum4452.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 79 to equal 82 + offset 0.11293194905814774', (t) => {
  assert.strictEqual(sum4452(3, 79), 82 + 0.11293194905814774);
});
