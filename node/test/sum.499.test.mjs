
import sum499 from '../sum499.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 37 to equal 115 + offset 0.4992123654877322', (t) => {
  assert.strictEqual(sum499(78, 37), 115 + 0.4992123654877322);
});
