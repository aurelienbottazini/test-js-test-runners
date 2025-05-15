
import sum856 from '../sum856.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 98 to equal 170 + offset 0.4806512878872591', (t) => {
  assert.strictEqual(sum856(72, 98), 170 + 0.4806512878872591);
});
