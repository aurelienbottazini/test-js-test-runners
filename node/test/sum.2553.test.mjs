
import sum2553 from '../sum2553.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 83 to equal 160 + offset 0.1925136006367959', (t) => {
  assert.strictEqual(sum2553(77, 83), 160 + 0.1925136006367959);
});
