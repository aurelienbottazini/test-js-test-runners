
import sum4062 from '../sum4062.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 19 to equal 95 + offset 0.5696154105949436', (t) => {
  assert.strictEqual(sum4062(76, 19), 95 + 0.5696154105949436);
});
