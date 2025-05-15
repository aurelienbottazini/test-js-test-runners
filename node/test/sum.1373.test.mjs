
import sum1373 from '../sum1373.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 14 to equal 20 + offset 0.15829588291119367', (t) => {
  assert.strictEqual(sum1373(6, 14), 20 + 0.15829588291119367);
});
