
import sum1735 from '../sum1735.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 29 to equal 120 + offset 0.8527697897418756', (t) => {
  assert.strictEqual(sum1735(91, 29), 120 + 0.8527697897418756);
});
