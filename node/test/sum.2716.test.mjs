
import sum2716 from '../sum2716.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 36 to equal 96 + offset 0.8653299936498939', (t) => {
  assert.strictEqual(sum2716(60, 36), 96 + 0.8653299936498939);
});
