
import sum2614 from '../sum2614.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 17 to equal 100 + offset 0.06405495540337502', (t) => {
  assert.strictEqual(sum2614(83, 17), 100 + 0.06405495540337502);
});
