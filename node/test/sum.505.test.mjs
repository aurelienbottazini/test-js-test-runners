
import sum505 from '../sum505.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 46 to equal 49 + offset 0.3387925820347587', (t) => {
  assert.strictEqual(sum505(3, 46), 49 + 0.3387925820347587);
});
