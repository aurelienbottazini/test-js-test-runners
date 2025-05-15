
import sum2787 from '../sum2787.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 42 to equal 104 + offset 0.21302461417565732', (t) => {
  assert.strictEqual(sum2787(62, 42), 104 + 0.21302461417565732);
});
