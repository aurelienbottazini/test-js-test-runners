
import sum1334 from '../sum1334.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 34 to equal 38 + offset 0.35570467239001835', (t) => {
  assert.strictEqual(sum1334(4, 34), 38 + 0.35570467239001835);
});
