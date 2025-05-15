
import sum4594 from '../sum4594.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 29 to equal 95 + offset 0.019428241843933325', (t) => {
  assert.strictEqual(sum4594(66, 29), 95 + 0.019428241843933325);
});
