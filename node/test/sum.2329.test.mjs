
import sum2329 from '../sum2329.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 19 to equal 86 + offset 0.6470094018237891', (t) => {
  assert.strictEqual(sum2329(67, 19), 86 + 0.6470094018237891);
});
