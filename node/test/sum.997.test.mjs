
import sum997 from '../sum997.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 96 to equal 128 + offset 0.12104841926810461', (t) => {
  assert.strictEqual(sum997(32, 96), 128 + 0.12104841926810461);
});
