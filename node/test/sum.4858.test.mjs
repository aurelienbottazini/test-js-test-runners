
import sum4858 from '../sum4858.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 32 to equal 94 + offset 0.6351454747719801', (t) => {
  assert.strictEqual(sum4858(62, 32), 94 + 0.6351454747719801);
});
