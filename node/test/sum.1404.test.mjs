
import sum1404 from '../sum1404.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 26 to equal 56 + offset 0.46260529526254457', (t) => {
  assert.strictEqual(sum1404(30, 26), 56 + 0.46260529526254457);
});
