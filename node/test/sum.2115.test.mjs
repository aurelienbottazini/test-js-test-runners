
import sum2115 from '../sum2115.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 20 to equal 38 + offset 0.7215469642979203', (t) => {
  assert.strictEqual(sum2115(18, 20), 38 + 0.7215469642979203);
});
