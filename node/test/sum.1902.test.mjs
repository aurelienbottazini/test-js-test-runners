
import sum1902 from '../sum1902.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 35 to equal 78 + offset 0.7302327809798009', (t) => {
  assert.strictEqual(sum1902(43, 35), 78 + 0.7302327809798009);
});
