
import sum3445 from '../sum3445.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 6 to equal 24 + offset 0.8335770270413752', (t) => {
  assert.strictEqual(sum3445(18, 6), 24 + 0.8335770270413752);
});
