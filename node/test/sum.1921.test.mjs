
import sum1921 from '../sum1921.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 89 to equal 172 + offset 0.2372945612315568', (t) => {
  assert.strictEqual(sum1921(83, 89), 172 + 0.2372945612315568);
});
