
import sum2046 from '../sum2046.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 65 to equal 70 + offset 0.8467871482243832', (t) => {
  assert.strictEqual(sum2046(5, 65), 70 + 0.8467871482243832);
});
