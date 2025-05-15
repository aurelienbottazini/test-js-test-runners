
import sum1397 from '../sum1397.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 52 to equal 131 + offset 0.793863836122394', (t) => {
  assert.strictEqual(sum1397(79, 52), 131 + 0.793863836122394);
});
